export const userAuth = (to, from, next) => {
  const userRole = JSON.parse(localStorage.getItem("userData"));
  if (
    localStorage.getItem("userData") != null &&
    localStorage.getItem("userData").length > 0 &&
    userRole.role == "user"
  ) {
    next();
  } else {
    if (localStorage.removeItem("userData")) {
      localStorage.removeItem("userData");
    }
    next("/auth/login");
  }
};

export const adminAuth = (to, from, next) => {
  const userRole = JSON.parse(localStorage.getItem("userData"));
  console.log(userRole);
  if (
    localStorage.getItem("userData") != null &&
    localStorage.getItem("userData").length > 0 &&
    userRole.role == "admin"
  ) {
    next();
  } else {
    localStorage.removeItem("userData");
    next("/admin/login");
  }
};
