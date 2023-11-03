import React from "react";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { auth, db } from "../config/firebaseConfig";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter an email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password must have at least 6 characters "),
});

const ErrorMessage = ({ errorValue }: any) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
  );
};

export default function LoginScreen({ navigation }: any) {
  const loginUser = async (values: any): Promise<void> => {
    // Destructure form values.
    const { email, password } = values;

    // Create User Account.
    await signInWithEmailAndPassword(auth, email, password);

    navigation.navigate("Todo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          fullname: "",
          username: "",
        }}
        onSubmit={async (values: any) => {
          await loginUser(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
        }) => (
          <>
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.email}
              placeholder="Email"
              onChangeText={handleChange("email")}
              autoCapitalize="none"
              keyboardType="email-address"
              onBlur={handleBlur("email")}
            />
            <ErrorMessage errorValue={touched.email && errors.email} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.password}
              placeholder="Password"
              onChangeText={handleChange("password")}
              autoCapitalize="none"
              onBlur={handleBlur("password")}
              secureTextEntry={true}
            />
            <ErrorMessage errorValue={touched.password && errors.password} />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={styles.call_to_action}>
        <Text>Don't have an account?</Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginVertical: 5,
    textAlign: "justify",
  },
  errorText: {
    color: "red",
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    marginVertical: 5,
    width: Dimensions.get("window").width - 50,

    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: Dimensions.get("window").width - 200,
    height: 44,
    borderRadius: 5,
    backgroundColor: "#343434",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },

    call_to_action: {
  display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
},
link: {
  color: 'blue',
      paddingLeft: 5,
}
});
