export const getRequestOptions = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 500) {
      const responseResult = "status 500, Server Error";
      throw responseResult;
    }
    throw new Error("Fetching data failed.");
  }

  const data = await response.json();
  return data;
};

export const postRequestOptions = async (
  url,
  firstName,
  lastName,
  emailAddress,
  gender,
  age,
  testimonial,
  othersKey,
  othersValue
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Accept", "application/json");

  var urlencoded = new URLSearchParams();
  firstName && urlencoded.append("firstName", firstName);
  lastName && urlencoded.append("lastName", lastName);
  emailAddress && urlencoded.append("emailAddress", emailAddress);
  gender && urlencoded.append("gender", gender);
  age && urlencoded.append("age", age);
  testimonial && urlencoded.append("testimonial ", testimonial);
  othersValue && urlencoded.append(othersKey, othersValue);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    if (response.status === 500) {
      const responceResult = "status 500, Server Error";
      throw responceResult;
    }
    throw new Error("Fetching data failed.");
  }

  return response;
};

export const postNewAccountRequestOptions = async (
  url,
  enteredFirst,
  enteredLast,
  enteredEmail,
  enteredGender,
  enteredAge,
  enteredTestimonial
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Accept", "application/json");

  var urlencoded = new URLSearchParams();
  urlencoded.append("firstName", enteredFirst);
  urlencoded.append("lastName", enteredLast);
  urlencoded.append("emailAddress", enteredEmail);
  urlencoded.append("gender", enteredGender);
  urlencoded.append("age", enteredAge);
  urlencoded.append("testimonial ", enteredTestimonial);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    if (response.status === 500) {
      const responceResult = "status 500, Server Error";
      throw responceResult;
    }
    throw new Error("Fetching data failed.");
  }

  return response;
};
