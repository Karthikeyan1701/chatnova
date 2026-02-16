import { Link, Form } from 'react-router-dom';
import { logoLight, logoDark, banner } from '../assets/assets.js';

import PageTitle from '../components/PageTitle.jsx';
import TextField from '../components/TextField.jsx';
import Button from '../components/Button.jsx';

const Register = () => {
  return (
    <>
      <PageTitle title='Create an account' />

      <div className='relative w-full min-h-dvh overflow-y-auto p-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link
            to='/'
            className='max-w-max mb-auto mx-auto lg:mx-0'
          >
            <img
              src={logoLight}
              alt='Chatnova logo'
              width={133}
              height={24}
              className='dark:hidden'
            />

            <img
              src={logoDark}
              alt='Chatnova logo'
              width={133}
              height={24}
              className='hidden dark:block'
            />
          </Link>

          <div className='flex flex-col gap-2 max-w-120 w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Create an account
            </h2>

            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Get started today and explore powerful tools that transform your
              ideas into reality.
            </p>

            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='text'
                name='name'
                label='Full name'
                placeholder='Full name'
                required={true}
                autofocus={true}
                helperText='Some helper text'
              />

              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                required={true}
              />

              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                required={true}
              />

              <Button type='submit'>Create account</Button>

              <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
                Already have an account?
                <Link
                  to='/login'
                  className='link inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
                >
                  Sign in
                </Link>
              </p>
            </Form>
          </div>

          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2026 Karthikeyan S. All rights reserved.
          </p>
        </div>

        <div className='hidden img-box lg:block lg:relative lg:rounded-large'>
          <img
            src={banner}
            alt=''
            className='img-cover'
          />

          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Chat with ChatNova to supercharge your ideas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
