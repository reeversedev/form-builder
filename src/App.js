import { useReducer } from 'react';

const EMAIL_CHANGE = 'EMAIL_CHANGE';
const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
const FIRSTNAME_CHANGE = 'FIRSTNAME_CHANGE';
const LASTNAME_CHANGE = 'LASTNAME_CHANGE';

const formReducer = (state, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case FIRSTNAME_CHANGE:
      return { ...state, firstName: action.payload };
    case LASTNAME_CHANGE:
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};

function App() {
  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password, firstName, lastName } = state;
    let data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    console.log('data', data);
  };

  const intialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const fields = ['email', 'password', 'firstName', 'lastName'];

  const [state, dispatch] = useReducer(formReducer, intialState);

  const onChange = (e) => {
    switch (e.target.name) {
      case 'email':
        dispatch({
          type: EMAIL_CHANGE,
          payload: e.target.value,
        });
        break;
      case 'password':
        dispatch({
          type: PASSWORD_CHANGE,
          payload: e.target.value,
        });
        break;
      case 'firstName':
        dispatch({
          type: FIRSTNAME_CHANGE,
          payload: e.target.value,
        });
        break;
      case 'lastName':
        dispatch({
          type: LASTNAME_CHANGE,
          payload: e.target.value,
        });
        break;
      default:
        return state;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {fields.map((field) => {
            return (
              <label htmlFor={field}>
                <input
                  type={field}
                  name={field}
                  value={state[field]}
                  placeholder=""
                  onChange={onChange}
                />
              </label>
            );
          })}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
