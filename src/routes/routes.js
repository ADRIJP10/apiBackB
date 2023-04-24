import bookRoutes from "./bookRoutes";

export default function (app) {

  app.use("/book", bookRoutes);
  
}