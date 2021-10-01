import { UserController } from "../../Adapters/Controllers/UserController";
import { UserRepository } from "../../repositories/User.repository";
import { UsersUseCase } from "../../UseCases/Users/UsersUseCase";

const usersRepository = new UserRepository()
const usersUseCase = new UsersUseCase(usersRepository)
const userController = new UserController(usersUseCase)

export { usersUseCase, userController }