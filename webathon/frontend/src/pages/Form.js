import React, { useState, useEffect } from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register('contact', {
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Please enter a valid Indian mobile number',
      },
    });
  }, [register]);

  return (
    <div>
      <h1>Pitch In!</h1>
      <div className="w-50 mx-auto">
        <form action="#" method="post" onSubmit={handleSubmit(submit)}>
          <label htmlFor="startup">Startup Idea Name *</label>
          <input
            type="text"
            id="startup"
            placeholder="Your Startup Idea Name..."
            required
            {...register('startup')}
          />
          <label htmlFor="des">Description *</label>
          <input
            type="text"
            id="des"
            placeholder="One Line Description of your Startup..."
            required
            {...register('description')}
          />
          <label htmlFor="idea">Pitch in your idea *</label>
          <textarea
            id="idea"
            placeholder="Let your creativity flow here..."
            required
            rows={4}
            {...register('idea')}
          ></textarea>
          <label htmlFor="number">Contact Number *</label>
          <input
            type="text"
            id="number"
            placeholder="Your Contact Number..."
            required
            {...register('contact')}
            pattern="^[6-9]\d{9}$"
          />
          {errors.contact && <span className="text-danger">{errors.contact.message}</span>}
          <label className='instr'>(Without '+91' or '0' at the start)</label>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Your email..."
            required
            {...register('email')}
          />
          <label htmlFor="opt">Are you registering as an individual? *</label>
          <div className="select">
            <select
              id="opt"
              required
              className="htmlForm-control"
              {...register('individual')}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <p id="M">* :- Mandatory Field</p>
          <div className="text-center">
              <button type="button" className="btn1">Next</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
