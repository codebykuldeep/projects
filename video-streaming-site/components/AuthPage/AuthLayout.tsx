import classes from "./auth-page.module.css";
import Login from "./Login";
import Signup from "./Signup";

  
export default function AuthLayout() {
  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        {/* <Login/> */}
        <Signup/>
      </div>
    </div>
  );
}
