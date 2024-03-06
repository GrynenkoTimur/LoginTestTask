import { useEffect, useState } from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSetNewPasswordMutation } from "../app/authApi";

import { SetNewPasswordInput } from "../types";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton, Box } from "@mui/material";

import { FormLayout, CustomInput, CustomButton } from "../components";

import { PASSWORD_VALIDATION } from "../validators";

type WithConfirmPassword<T> = T & { confirmPassword: string };

const setNewPasswordSchema = yup
  .object<yup.ObjectSchema<WithConfirmPassword<SetNewPasswordInput>>>()
  .shape({
    password: PASSWORD_VALIDATION,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Password confirmation is required"),
    secret: yup.string(),
    token: yup.string(),
  });

export const Reset = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WithConfirmPassword<SetNewPasswordInput>>({
    defaultValues: {
      password: "",
      confirmPassword: "",
      secret: "",
      token: "",
    },
    resolver: yupResolver(setNewPasswordSchema),
  });

  const [resetPassword, { data, error, isLoading }] =
    useSetNewPasswordMutation();

  const submitHandler = ({
    confirmPassword,
    ...rest
  }: WithConfirmPassword<SetNewPasswordInput>) => resetPassword(rest);

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    if (data) {
      reset();
      navigate("/auth/login");
    }
  }, [data, navigate, reset]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while resetting password...",
        icon: "error",
        color: "#060e1e",
        confirmButtonText: "Fine...",
        confirmButtonColor: "#f27474",
      }).then(() => {
        navigate("/auth/login");
      });
    }
  }, [error, navigate]);

  return (
    <FormLayout title="Create new Password?">
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box textAlign="left" fontWeight={600}>
          <label>
            Password
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <CustomInput
                  fullWidth
                  placeholder="Password"
                  variant="outlined"
                  disabled={isLoading}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  type={isPasswordVisible ? "text" : "password"}
                  sx={{ marginBottom: "25px", marginTop: "8px" }}
                  inputProps={{
                    autocomplete: "new-password",
                    form: {
                      autocomplete: "off",
                    },
                    ...field,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setPasswordVisible(!isPasswordVisible)}
                          edge="end"
                        >
                          {isPasswordVisible ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </label>

          <label>
            Confirm Password
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <CustomInput
                  fullWidth
                  placeholder="Password"
                  variant="outlined"
                  disabled={isLoading}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  sx={{ marginTop: "8px" }}
                  inputProps={{
                    autocomplete: "new-password",
                    form: {
                      autocomplete: "off",
                    },
                    ...field,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            setConfirmPasswordVisible(!isConfirmPasswordVisible)
                          }
                          edge="end"
                        >
                          {isConfirmPasswordVisible ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </label>
        </Box>

        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "30px" }}
          disabled={isLoading}
        >
          Reset Password
        </CustomButton>
      </form>
    </FormLayout>
  );
};
