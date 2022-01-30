const CrowdFunding = artifacts.require("CrowdFunding");
var targetAmount = 1000;
var deadline = 3600;

module.exports = function (deployer) {
  deployer.deploy(CrowdFunding, targetAmount, deadline);
};
