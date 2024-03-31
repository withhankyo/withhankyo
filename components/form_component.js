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
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setOccupation] = useState("developer");
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const [nameError, setNameError] = useState("");
  // const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmedError, setConfirmedError] = useState("");

  const router = useRouter(); // Initialize the router for redirection

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Set isSubmitting to true immediately on submit
    setIsSubmitting(true);

    // Clear previous errors
    // setNameError("");
    // setSurnameError("");
    setEmailError("");
    setConfirmedError("");

    // Perform local validation
    let isValid = true;
    // if (!name.trim()) {
    //   setNameError("Please enter your name.");
    //   isValid = false;
    // }
    // if (!surname.trim()) {
    //   setSurnameError("Please enter your surname.");
    //   isValid = false;
    // }
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
        await submit({ email, role, confirmed, _botpoison: solution });

        // Navigate away or reset the form only after successful submission
        // setName("");
        // setSurname("");
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
    <form id="form" className="form" onSubmit={onSubmit} data-nosnippet>
      <fieldset className="form-box">

        {/*
          <div className="form-row">
            <div className="form-item form-item-half">
              <label htmlFor="name" className="form-label required">Name</label>
              <div className="form-field">
                <div className="form-input">
                  <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                {nameError && <p className="form-error">{nameError}</p>}
              </div>
            </div>
            <div className="form-item form-item-half">
              <label htmlFor="surname" className="form-label required">Surname</label>
              <div className="form-field">
                <div className="form-input">
                  <input id="surname" name="surname" type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                {surnameError && <p className="form-error">{surnameError}</p>}
              </div>
            </div>
          </div>
        */}

        <div className="form-row">
          <div className="form-item">
            <label htmlFor="email" className="form-label required">Email</label>
            <div className="form-field">
              <div className="form-input">
                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              {emailError && <p className="form-error">{emailError}</p>}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-item">
            <label htmlFor="role" className="form-label required">Role</label>
            <div className="form-field">
              <div className="form-select">
                <select id="role" name="role" value={role} onChange={(e) => setOccupation(e.target.value)}>
                  <option defaultValue="developer">Developer</option>
                  <option value="web designer">Web Designer</option>
                  <option value="founder">Founder</option>
                  <option value="student">Student</option>
                  <option value="project manager">Project Manager</option>
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
                <input id="confirmed" name="confirmed" type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
                <span className="checkmark"></span>
                <span className="label">I&apos;m excited to receive roadmap updates and to be among the first to onboard with hankyō!</span>
              </label>
              {confirmedError && <p className="form-error">{confirmedError}</p>}
            </div>
          </div>
        </div>

        <div className="form-footer">
          <div className="form-item">
            <div className="form-submit">
              <button type="submit" disabled={isSubmitting || submitting}>
                {isSubmitting ? "Securing your spot in line..." : "Join our waitlist"}
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
