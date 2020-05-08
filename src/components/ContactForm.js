import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id='firstName'
            name="firstName"
            type='text'
            placeholder="Edd"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id='lastName'
            name="lastName"
            type='text'
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input
            id='email'
            name="email"
            ref={register({ required: true })}
            type='text'
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id='message'
            type='text'
            name="message"
            ref={register({ required: false })}
          />
        </div>
        <div>
          <label htmlFor='role'>Role:</label>
          <select id='role' name='role' ref={register({ required: true })}>
          <option value=''></option>
            <option value='Front-End Developer'>Front-End Developer</option>
            <option value='Back-End Developer'>Back-End Developer</option>
            <option value='Designer'>Designer</option>
            <option value='Data Scientist'>Data Scientist</option>
          </select>
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" data-testid='submit' />
      </form>
    </div>
  );
};

export default ContactForm;
