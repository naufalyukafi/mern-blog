import React from "react";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import "./register.scss";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="img-bg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" type="name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={20} />
        <Button title="Register" />
        <Gap height={50} />
        <Link title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
