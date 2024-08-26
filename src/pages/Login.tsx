import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/forms/PHForm";
import PHInput from "../components/forms/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging In");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   console.log(user);
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Logged In", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (error) {
    //   toast.error("Something went wrong", { id: toastId, duration: 2000 });
    // }
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="id" label="ID:" />
      </div>
      <div>
        <PHInput type="text" name="password" label="PASSWORD:" />
      </div>
      <Button htmlType="submit">login</Button>
    </PHForm>
  );
};

export default Login;
