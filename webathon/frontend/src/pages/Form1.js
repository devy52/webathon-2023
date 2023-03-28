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
          
          <p id="M">* :- Mandatory Field</p>
          <div className="text-center">
              <button type="button" className="btn1">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
