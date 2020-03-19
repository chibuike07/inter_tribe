import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ToastMessage, type } from "../../helpers/Toaster/Toaster";
// setup anew cache memory
const cache = new InMemoryCache();
//get token
const token = sessionStorage.getItem("tribr_token") || "";
console.info(token);
//setup apollo client
const client = new ApolloClient({
  //
  uri: "http://localhost:2020",
  //cache where apollo save all the information temporary in the cache
  cache,
  // header passes instructions about the client information
  headers: {
    authorization: token && token
  },
  onError: ({ graphQlErrors, networkError, operation }) => {
    if (
      graphQlErrors &&
      operation.query.definitions[0].operation === "mutation"
    ) {
      graphQlErrors.map(({ message }) => ToastMessage(type.ERROR, message));
      return false;
    }
    if (
      networkError &&
      operation.query.definitions[0].opertion === "mutation"
    ) {
      return ToastMessage(type.ERROR, "Network Error");
    }
  }
});
export default client;
