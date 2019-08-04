use actix_web::{web, App, HttpResponse, HttpServer, Responder};

const PORT: &str = "8088";

fn index() -> impl Responder {
    HttpResponse::Ok().body("Come here in the future to change your password.")
}

fn main() {
    println!("Server soon to be running on http://127.0.0.1:{}", PORT);
    HttpServer::new(|| App::new().route("/", web::get().to(index)))
        .bind(format!("127.0.0.1:{}", PORT))
        .unwrap()
        .run()
        .unwrap();
}
