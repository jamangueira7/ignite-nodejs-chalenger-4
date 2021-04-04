import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {

    try {
      const { user_id } = request.headers;
      const user_uuid = String(user_id);

      const users = this.listAllUsersUseCase.execute({ user_id: user_uuid });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({ "error": err.message  });
    }
  }
}

export { ListAllUsersController };
