import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FormLayout, CustomInput, CustomButton } from "../components";
import { ForgotPasswordInput } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { useForgotPasswordMutation } from "../app/authApi";

import { EMAIL_VALIDATION } from "../validators";

const forgotPasswordSchema = yup
  .object<yup.ObjectSchema<ForgotPasswordInput>>()
  .shape({
    email: EMAIL_VALIDATION,
  });

export const Forgot = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
  });

  const [forgotPassword, { data, error, isLoading }] =
    useForgotPasswordMutation();

  const submitHandler = (data: ForgotPasswordInput) => forgotPassword(data);

  useEffect(() => {
    if (data || error) {
      navigate("/auth/reset-password");
    }
  }, [data, error, navigate]);

  return (
    <FormLayout title="Forgot Password?">
      <form onSubmit={handleSubmit(submitHandler)} onReset={() => reset()}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <CustomInput
              error={!!errors.email}
              disabled={isLoading}
              helperText={errors.email?.message}
              variant="outlined"
              fullWidth
              placeholder="Enter your email"
              inputProps={{
                autocomplete: "off",
                form: {
                  autocomplete: "off",
                },
                ...field,
              }}
            />
          )}
        />

        <CustomButton
          type="submit"
          variant="contained"
          disabled={isLoading}
          color="primary"
          fullWidth
          sx={{ marginTop: "25px" }}
        >
          Send
        </CustomButton>
        <CustomButton
          type="reset"
          variant="outlined"
          disabled={isLoading}
          color="secondary"
          fullWidth
          sx={{ marginTop: "20px" }}
        >
          Cancel
        </CustomButton>
      </form>
    </FormLayout>
  );
};
