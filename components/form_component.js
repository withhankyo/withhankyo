// Form Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormspark } from "@formspark/use-formspark";
import Botpoison from "@botpoison/browser";

// Constants
const FORMSPARK_FORM_ID = "TT92i1wj6";
const botpoison = new Botpoison({
  publicKey: "pk_2cf995d5-ea18-4a1d-aec0-c64824c9a781"
});

export default function FormComponent() {
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmedError, setConfirmedError] = useState("");

  const router = useRouter(); // Initialize the router for redirection

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Set isSubmitting to true immediately on submit
    setIsSubmitting(true);

    // Clear previous errors
    setNameError("");
    setLastNameError("");
    setEmailError("");
    setConfirmedError("");

    // Perform local validation
    let isValid = true;
    if (!name.trim()) {
      setNameError("Please enter your name.");
      isValid = false;
    }
    if (!lastName.trim()) {
      setLastNameError("Please enter your last name.");
      isValid = false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    }
    if (!confirmed) {
      setConfirmedError("You must agree before submitting.");
      isValid = false;
    }

    // Only proceed if local validation passes
    if (isValid) {
      try {
        // If validation passes, perform the Botpoison challenge
        const { solution } = await botpoison.challenge();
        await submit({ name, lastName, email, occupation, confirmed, _botpoison: solution });

        // Navigate away or reset the form only after successful submission
        setName("");
        setLastName("");
        setEmail("");
        setOccupation("");
        setConfirmed(false);
        router.push("/thank-you");
      } catch (error) {
        console.error("Form submission error", error);
      }
    }

    // Reset isSubmitting status after all operations are complete
    setIsSubmitting(false);
  };

  return (
    <form id="form" className="form" onSubmit={onSubmit}>
      <fieldset className="form-box">
        <div className="form-row">
          <div className="form-item form-item-half">
            <label className="form-label required">Name</label>
            <div className="form-field">
              <div className="form-input">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              {nameError && <p className="form-error">{nameError}</p>}
            </div>
          </div>

          <div className="form-item form-item-half">
            <label className="form-label required">Last Name</label>
            <div className="form-field">
              <div className="form-input">
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
              {lastNameError && <p className="form-error">{lastNameError}</p>}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-item">
            <label className="form-label required">Email</label>
            <div className="form-field">
              <div className="form-input">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              {emailError && <p className="form-error">{emailError}</p>}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-item">
            <label className="form-label required">Role</label>
            <div className="form-field">
              <div className="form-select">
                <select value={occupation} onChange={(e) => setOccupation(e.target.value)} required>
                  <option value="developer">Developer</option>
                  <option value="web designer">Web Designer</option>
                  <option value="student">Student</option>
                  <option value="founder">Founder</option>
                  <option value="content creator">Content Creator / Marketer</option>
                  <option value="project manager">Project Manager</option>
                  <option value="it professional">IT Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-item">
            <div className="form-field">
              <label className="form-checkbox" htmlFor="confirmed">
                <input id="confirmed" name="confirmed" type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} required />
                <span className="checkmark"></span>
                <label htmlFor="confirmed" className="form-checkbox-label">
                  I agree to receive an email when the product is launched.
                </label>
              </label>
              {confirmedError && <p className="form-error">{confirmedError}</p>}
            </div>
          </div>
        </div>






        <div className="form-footer">
          <div className="form-item">
            <div className="form-submit">
              <button type="submit" disabled={isSubmitting || submitting}>
                {isSubmitting ? "Submitting..." : "Send your request"}
              </button>
            </div>
          </div>
        </div>

      </fieldset>
    </form>
  );
}

