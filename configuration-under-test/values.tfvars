variable "eks_version" {
  type        = string
  description = "EKS vpc-cni add-on version"
  # region provided
  # renovate: eksFilter={"region":"eu-west-1"}
  default     = "1.26"
}
