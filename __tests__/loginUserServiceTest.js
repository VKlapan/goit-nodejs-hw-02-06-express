const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();

const User = require("../services/schemas/user");
const { loginUser } = require("../services/usersService");

describe("Check Login User service", function () {
  test("Should return Token and a User's String properties 'email' and 'subscription' ", async () => {
    const mockCheckedEmail = "test@test.ua";
    const mockCheckedPassword = "123456789";

    const mockCredential = {
      email: mockCheckedEmail,
      password: mockCheckedPassword,
    };

    const mockUser = {
      _id: "63ac4e28e1f63201819e6f13",
      email: "test@test.ua",
      password: bcrypt.hashSync(mockCheckedPassword, saltRounds),
      subscription: "starter",
      token: null,
    };

    jest.spyOn(User, "findOne").mockImplementationOnce(() => mockUser);
    jest.spyOn(User, "findByIdAndUpdate").mockImplementationOnce(() => true);

    const result = await loginUser(mockCredential);

    expect(result.email).toEqual(mockUser.email);
    expect(result.subscription).toEqual(mockUser.subscription);
    expect(result.jwt).toBeDefined();
  });
});
