import request from "../../../services/request";

export const fetchShops = () => {
  return request("/shops");
};
