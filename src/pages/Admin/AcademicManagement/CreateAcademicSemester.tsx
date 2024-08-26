import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/forms/PHForm";
import PHInput from "../../../components/forms/PHInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name"></PHInput>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateAcademicSemester;
