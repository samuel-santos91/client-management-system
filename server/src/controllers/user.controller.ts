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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      dateOfBirth,
      mainLanguage,
      secondaryLanguage,
      fundingSource,
    } = req.body;
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    user.name = name;
    user.dateOfBirth = dateOfBirth;
    user.mainLanguage = mainLanguage;
    user.secondaryLanguage = secondaryLanguage;
    user.fundingSource = fundingSource;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    await user.destroy();

    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
