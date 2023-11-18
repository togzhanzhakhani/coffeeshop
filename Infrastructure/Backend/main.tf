provider "local" {
}

resource "null_resource" "backend_server" {
  provisioner "local-exec" {
    command = <<-EOT
      cd ../Backend_py
      python manage.py runserver
    EOT
  }
}
