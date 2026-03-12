import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js/min";
import "./contact-email-form.css";

const statusMessages = {
  success: "Message sent successfully. Our team will contact you soon.",
  error: "Unable to send the message right now. Please try again in a moment.",
  unconfigured: "Email form is not configured yet. Add your EmailJS IDs in the .env file.",
};

const defaultCountry = "IN";
const supportedCountries = ["IN", "US", "GB", "CA", "AU", "AE", "SG", "DE"];
const phoneValidationMessage =
  "Enter a valid phone number";

const validateInternationalPhone = (countryCode, phoneNumber) => {
  const trimmedValue = phoneNumber.trim();

  if (!trimmedValue) {
    return {
      error: "Phone number is required.",
      formattedPhone: "",
    };
  }

  const parsedNumber = parsePhoneNumberFromString(trimmedValue, countryCode);

  if (!parsedNumber || !parsedNumber.isValid()) {
    return {
      error: phoneValidationMessage,
      formattedPhone: "",
    };
  }

  return {
    error: "",
    formattedPhone: parsedNumber.formatInternational(),
  };
};

const ContactEmailForm = ({ className, sourcePage }) => {
  const formRef = useRef(null);
  const phoneInputRef = useRef(null);
  const phoneHiddenRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [localPhoneNumber, setLocalPhoneNumber] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const countryOptions = supportedCountries.map((countryCode) => ({
    code: countryCode,
    dialCode: `+${getCountryCallingCode(countryCode)}`,
  }));

  const syncPhoneValidation = (countryCode, phoneNumber, shouldShowError = false) => {
    const validation = validateInternationalPhone(countryCode, phoneNumber);

    if (phoneHiddenRef.current) {
      phoneHiddenRef.current.value = validation.formattedPhone;
    }

    if (shouldShowError) {
      setPhoneError(validation.error);
    }

    return validation;
  };

  const handleCountryChange = (event) => {
    const nextCountry = event.target.value;
    setSelectedCountry(nextCountry);
    setPhoneError("");
    if (phoneHiddenRef.current) {
      phoneHiddenRef.current.value = "";
    }
  };

  const handlePhoneChange = (event) => {
    const nextPhoneNumber = event.target.value.replace(/\D/g, "");
    setLocalPhoneNumber(nextPhoneNumber);
    setPhoneError("");
    if (phoneHiddenRef.current) {
      phoneHiddenRef.current.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error: phoneValidationError } = syncPhoneValidation(
      selectedCountry,
      localPhoneNumber,
      true,
    );

    if (phoneValidationError) {
      setStatus("idle");
      phoneInputRef.current?.focus();
      return;
    }

    setPhoneError("");
    setFeedback("");

    if (!isConfigured) {
      setStatus("error");
      setFeedback(statusMessages.unconfigured);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      formRef.current?.reset();
      setSelectedCountry(defaultCountry);
      setLocalPhoneNumber("");
      setStatus("success");
      setFeedback(statusMessages.success);
    } catch (error) {
      console.error("EmailJS submission failed", error);
      setStatus("error");
      setFeedback(statusMessages.error);
    }
  };

  return (
    <form ref={formRef} className={`emailjs-form ${className}`} onSubmit={handleSubmit}>
      <input
        name="user_name"
        type="text"
        placeholder="Name*"
        autoComplete="name"
        maxLength={250}
        required
      />
      <div className="emailjs-form-field">
        <div className="emailjs-phone-row">
          <select
            name="user_phone_country"
            className="emailjs-phone-country"
            value={selectedCountry}
            onChange={handleCountryChange}
            aria-label="Select country"
          >
            {countryOptions.map((country) => (
              <option key={country.code} value={country.code}>
                {country.dialCode}
              </option>
            ))}
          </select>
          <input
            ref={phoneInputRef}
            name="user_phone_local"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Phone No*"
            autoComplete="tel-national"
            value={localPhoneNumber}
            aria-invalid={phoneError ? "true" : "false"}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <input ref={phoneHiddenRef} type="hidden" name="user_phone" />
        {phoneError ? (
          <p className="emailjs-form-field-error" role="alert">
            {phoneError}
          </p>
        ) : null}
      </div>
      <input
        name="user_email"
        type="email"
        placeholder="E-mail*"
        autoComplete="email"
        maxLength={250}
        required
      />
      <input
        name="subject"
        type="text"
        placeholder="Subject*"
        autoComplete="organization-title"
        maxLength={500}
        required
      />
      <textarea
        name="message"
        placeholder="Message*"
        rows={6}
        minLength={100}
        maxLength={5000}
        required
      />
      <input type="hidden" name="source_page" value={sourcePage} />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Mail"}
      </button>

      {feedback ? (
        <p
          className={`emailjs-form-status emailjs-form-status--${status}`}
          role={status === "error" ? "alert" : "status"}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
};

export default ContactEmailForm;
