import { SERVER_LINK } from "./urls";

//get mega menu data
export async function getMegaMenu() {
  try {
    const response = await fetch(`${SERVER_LINK}/mega-menu`);
    if (!response.ok) {
      return {
        success: false,
        data: [],
      };
    }

    const data = await response.json();
    if (data) {
      return {
        success: true,
        data: data,
      };
    }

    return {
      success: false,
      data: [],
    };
  } catch (error) {
    console.log("Error : ", error);
    return {
      success: false,
      error: "Network error or server unavailable",
    };
  }
}

//get mega menu data
export async function getUsers() {
  try {
    const response = await fetch(`${SERVER_LINK}/users`);
    if (!response.ok) {
      return {
        success: false,
        data: [],
      };
    }

    const data = await response.json();
    if (data) {
      return {
        success: true,
        data: data,
      };
    }

    return {
      success: false,
      data: [],
    };
  } catch (error) {
    console.log("Error : ", error);
    return {
      success: false,
      error: "Network error or server unavailable",
    };
  }
}
