import { useEffect } from "react";
import { useNavigate  } from 'react-router-dom';

const VerifyUser = () => {
    const navigation = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const email = urlParams.get("email");

    if (token && email) {
      const data = { email, token };

      fetch("https://sxt7404.uta.cloud/php/Mailer.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((responseData) => {
          if (responseData.success) {
            console.log("Email verified successfully");
            navigation("/login");
          } else if (responseData.error) {
            console.error("Email verification failed");
            navigation("/login");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return null;
};

export default VerifyUser;
