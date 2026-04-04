import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/features/auth/authActions";
import { useEffect } from "react";
import type { RootState, AppDispatch } from "@/store/reduxStore";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, success, user, message } = useSelector(
    (state: RootState) => state.auth,
  );


  console.log(loading, user, success, message);

  // useEffect(() => {
  //   const testPayload = {
  //     fullname: "Arya Sigh",
  //     username: "arya_ev",
  //     email: "arya@exmple.com", // OR remove this and use phoneNumber
  //     // phoneNumber: "+919876543210",
  //     password: "StronPass@123", // must match passwordSchema
  //     dateOfBirth: new Date("2000-01-01"),
  //     profilePicture: null,
  //     gender: 1,
  //   };

  //   dispatch(signupUser(testPayload));
  // }, [dispatch]);

  return (
    <div>
      <h1>Signup Test</h1>
      {loading && <p>Loading...</p>}
      {success && <p>Success</p>}
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
