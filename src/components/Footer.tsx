import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const Footer = () => {
  return (
    <Card>
      <CardHeader>
        <Card className="gap-1">
          <h3 className="text-xl font-bold text-center px-2 text-green-500 tracking-wider">
            Edvora
          </h3>
          <h5 className="text-md font-semibold text-center px-2">
            Social Media Platform
          </h5>
        </Card>
      </CardHeader>
      <CardContent>
        <p className="text-xs font-extralight text-center py-5 px-2">
          About  Help Press API Jobs Privacy Terms Locations Language Meta
          Verified
          <span className="text-green-500 font-semibold">
            <br /> product from zynorix
          </span>
        </p>
      </CardContent>

      <CardFooter className="w-full border-t">
        <p className="text-xs font-extralight w-full text-center">
          All rights reserved | Edvora - Social learning platform
        </p>
      </CardFooter>
    </Card>
  );
};

export default Footer;
