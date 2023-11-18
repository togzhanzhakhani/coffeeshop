provider "local" {
}

resource "null_resource" "frontend_server" {
  provisioner "local-exec" {
    command = <<-EOT
      cd ../Frontend/Coffee-Berw
      ng serve
    EOT
  }
}



