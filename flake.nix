{
  description = "Development flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs, ... }: let
    lib = nixpkgs.lib;
    forAllSystems = function: lib.genAttrs [
      "aarch64-linux"
      "x86_64-linux"
    ] function;
  in {
    devShells = forAllSystems (system: let
      pkgs = import nixpkgs {
        inherit system;
      };

    in {
      default = pkgs.mkShellNoCC {
        # Change your packages to just this:
      packages = with pkgs; [
        nodejs_latest
      ];
      };
    });
  };
}
