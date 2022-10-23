import Sport from "../models/sport.js";
import City from "../models/city.js";
import Area from '../models/area.js';

export const createSport = async (req, res, next) => {
  let sport = new Sport(req.body);
  try {
    await sport.save();
    res.status(201).json({
      message: "Sport created",
    });
  } catch (err) {
    next(err);
  }
};

export const updateSport = async (req, res, next) => {
  try {
    let updateSport = await Sport.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("updated sport");
  } catch (err) {
    next(err);
  }
};

export const deleteSport = async (req, res, next) => {
  try {
    let sports = await Sport.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted sports" });
  } catch (err) {
    next(err);
  }
};

export const getSports = async (req, res, next) => {
  try {
    let event = await Sport.find();
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};

export const addCity = async (req, res, next) => {
  try {
    let city = new City(req.body);
    await city.save();
    res.status(201).json({
      message: "City added",
    });
  } catch (err) {
    next(err);
  }
};

export const updateCity = async (req, res, next) => {
  try {
    let city = await City.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("updated city");
  } catch (err) {
    next(err);
  }
};

export const deleteCity = async (req, res, next) => {
  try {
    let city = await City.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted city");
  } catch (err) {
    next(err);
  }
};

export const getCity = async (req, res, next) => {
  try {
    let city = await City.find();
    res.status(200).json(city);
  } catch (err) {
    next(err);
  }
};

export const getArea = async (req, res, next) => {
  try {
    let city = await Area.find();
    res.status(200).json(city);
  } catch (err) {
    next(err);
  }
};

export const addArea = async (req, res, next) => {
  let location = new Area(req.body);
  
    try {
      await location.save();
      res.status(200).json({
        message: "Location added",
      });
    } catch (err) {
      next(err);
    }
  
};

export const updateArea = async (req, res, next) => {
  try {
    await Area.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("location updated");
  } catch (err) {
    next(err);
  }
};

export const deleteArea  = async (req, res, next) => {
  try {
   await Area.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted city");
  } catch (err) {
    next(err);
  }
}
