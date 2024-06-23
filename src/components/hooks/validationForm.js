export default function validateForm(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (isNaN(values.age) || values.age <= 0) {
    errors.age = 'Age must be a number greater than 0';
  }
  if (values.attendingWithGuest === 'Yes' && !values.guestName) {
    errors.guestName = 'Guest Name is required';
  }
  return errors;
}
