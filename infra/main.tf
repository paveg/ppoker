provider "aws" {
  region = "ap-northeast-1"
}

provider "archive" {}
terraform {
  backend "s3" {
    bucket = "managed-infrastructure"
    key    = "ppoker/terraform.tfstate"
    region = "ap-northeast-1"
  }
}
