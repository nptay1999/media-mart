import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import toast from 'react-hot-toast';

const FooterRight = () => {
  return (
    <div>
      <div className="text-base font-bold mb-6 capitalize">NEWSLETTER</div>
      <div className="text-sm font-light transition text-gray-600 hover:text-gray-800 mb-6">
        Sign up for newsletter to receive special offers and exclusive news
        about TEE products
      </div>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        })}
        onSubmit={(values, actions) => {
          const { setSubmitting, resetForm } = actions;
          toast.success(values.email);
          setSubmitting(false);
          resetForm();
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                id="email"
                {...formik.getFieldProps('email')}
                className="w-full border-0 outline-none p-4 bg-white font-light text-sm"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-bold bg-orange-500 text-white border-0 outline-none"
            >
              Subcribe
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FooterRight;
