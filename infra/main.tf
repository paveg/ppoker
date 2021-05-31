provider "aws" {
  region = "ap-northeast-1"
}

terraform {
  backend "s3" {
    bucket = "managed-infrastructure"
    key    = "ppoker/terraform.tfstate"
    region = "ap-northeast-1"
  }
}
