const processFirebaseErrors = (msg) => {
  switch (msg) {
    case "Firebase: Error (auth/email-already-in-use).":
      return "Email already in use";
    case "Firebase: Error (auth/invalid-email).":
      return "choose a valid email: example@example.com";
    case "Firebase: Error (auth/internal-error).":
      return "Cannot process request, something went wrong";
    case "Firebase: Error (auth/wrong-password).":
      return "Wrong password";
    default:
      return msg;
  }
};

export default processFirebaseErrors;
