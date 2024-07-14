import { Request, Response } from "express";
import User from "../models/Users";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      dateOfBirth,
      mainLanguage,
      secondaryLanguage,
      fundingSource,
    } = req.body;
    const user = await User.create({
      name,
      dateOfBirth,
      mainLanguage,
      secondaryLanguage,
      fundingSource,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
