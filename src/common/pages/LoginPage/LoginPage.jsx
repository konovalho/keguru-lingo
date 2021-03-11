import React, { useEffect, useState } from 'react';
// import { Form, Field } from 'react-final-form'

// import styles from './styles.styl'

const LoginPage = () => {
  const onSubmit = (evt) => {
    console.log('onSubmit', evt);
  };

  return (
    <div>
      Login page
      {/* <h1 className={styles.title}>
        LoginPage
      </h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Your Email</label>
              <Field name="email" component="input" placeholder="Email" />
            </div>
            <div>
              <label>Your password</label>
              <Field name="password" component="input" placeholder="Password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      /> */}
    </div>
  )
}

export default LoginPage