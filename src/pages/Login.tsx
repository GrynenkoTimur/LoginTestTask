import { useEffect, useState } from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { LoginInput } from "../types";

import { useLoginMutation } from "../app/authApi";

import {
  FormLayout,
  CustomButton,
  Icon,
  CustomInput,
  CustomLink,
} from "../components";

import { IconVariant } from "../components/Icon";

import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from "../validators";

const loginSchema = yup.object<yup.ObjectSchema<LoginInput>>().shape({
  email: EMAIL_VALIDATION,
  password: PASSWORD_VALIDATION,
});

export const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<LoginInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const [login, { data, error, isLoading }] = useLoginMutation();

  const submitHandler = (data: LoginInput) => login(data);
  const isEmailEntered = watch("email");

  const [isVisible, setVisible] = useState(false);

  const AuthWithButtons = [
    {
      title: "Google",
      variant: IconVariant.google,
    },
    {
      title: "Github",
      variant: IconVariant.github,
    },
  ];

  useEffect(() => {
    if (data) {
      reset();
      navigate("/");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while logging in...",
        icon: "error",
        color: "#060e1e",
        confirmButtonText: "Fine...",
        confirmButtonColor: "#f27474",
      });
    }
  }, [error]);

  return (
    <FormLayout title="Log in to your account">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {AuthWithButtons.map(({ title, variant }) => (
          <CustomButton
            key={title}
            variant="outlined"
            color="secondary"
            fullWidth
            disabled={isLoading}
            sx={{ marginLeft: variant === IconVariant.github ? "16px" : "" }}
          >
            <Icon variant={variant} />
            <Box ml="10px">{title}</Box>
          </CustomButton>
        ))}
      </Box>

      <Divider sx={{ color: "#BEC5CC", margin: "30px 0" }}>OR</Divider>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <CustomInput
              error={!!errors.email}
              helperText={errors.email?.message}
              variant="outlined"
              fullWidth
              disabled={isLoading}
              placeholder="Work email"
              inputProps={{
                autoComplete: "off",
                form: {
                  autocomplete: "off",
                },
                ...field,
              }}
            />
          )}
        />

        <Collapse in={!!isEmailEntered}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <CustomInput
                fullWidth
                disabled={isLoading}
                placeholder="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
                type={isVisible ? "text" : "password"}
                sx={{ marginTop: "25px" }}
                inputProps={{
                  autoComplete: "new-password",
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
                        onClick={() => setVisible(!isVisible)}
                        edge="end"
                      >
                        {isVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Box textAlign="right" mt="15px">
            <CustomLink to="/auth/forgot-password">
              Forgot your password?
            </CustomLink>
          </Box>
        </Collapse>

        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          fullWidth
          sx={{ marginTop: "30px" }}
        >
          Log in to Qencode
        </CustomButton>
      </form>

      <Box mt="20px">
        Is your company new to Qencode?
        <CustomLink to="/auth/sign-up"> Sign up</CustomLink>
      </Box>
    </FormLayout>
  );
};
