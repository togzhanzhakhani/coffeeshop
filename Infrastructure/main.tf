provider "local" {
}

module "frontend" {
  source = "./Frontend"
}

module "backend" {
  source = "./Backend"
}

module "database" {
  source = "./Database"
}

