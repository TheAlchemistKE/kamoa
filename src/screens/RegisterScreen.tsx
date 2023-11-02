import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Formik } from "formik";
import uploadImage from "../utils/uploadImage";
import * as uuid from "uuid";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Button,
} from "react-native";
import { auth, db } from "../config/firebaseConfig";
import { string } from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter an email"),
  fullname: Yup.string()
    .label("Fullname")
    .required("Please enter your fullname"),
  username: Yup.string().label("Username").required("Please enter a username"),
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

export default function RegisterScreen({ navigation }: any) {
  const [avatar, setAvatar] = useState<string | null>(null);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //
  //   if (!result.canceled) {
  //     const uri = result.assets[0].uri;
  //     const downloadUrl = await uploadImage(uri);
  //     setAvatar(downloadUrl);
  //   }
  // };

  const registerUser = async (values: any): Promise<void> => {
    // Destructure form values.
    const { email, fullname, username, password } = values;

    // Create User Account.
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await sendEmailVerification(userCredential.user);

    // Create User Profile.
    const [profile] = await Promise.all([
      setDoc(doc(db, "user_profiles", userCredential.user.uid), {
        id: userCredential.user.uid,
        email,
        fullname,
        username,
        avatar,
      }),
    ]);

    navigation.navigate("Todo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          fullname: "",
          username: "",
        }}
        onSubmit={async (values: any) => {
          await registerUser(values);
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
              value={values.fullname}
              placeholder="Fullname"
              onChangeText={handleChange("fullname")}
              autoCapitalize="none"
              onBlur={handleBlur("fullname")}
            />
            <ErrorMessage errorValue={touched.fullname && errors.fullname} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.username}
              placeholder="Username"
              onChangeText={handleChange("username")}
              autoCapitalize="none"
              onBlur={handleBlur("username")}
            />
            <ErrorMessage errorValue={touched.username && errors.username} />
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
            {/*<Button*/}
            {/*  title="Pick an image from camera roll"*/}
            {/*  onPress={pickImage}*/}
            {/*/>*/}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <View style={styles.call_to_action}>
        <Text>Already have an account?</Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Login</Text>
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
    marginVertical: 2,
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
