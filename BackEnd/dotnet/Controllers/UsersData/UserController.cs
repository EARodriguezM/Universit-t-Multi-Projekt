using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Authentication;

using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;

using Wchter.Helpers;
using Wchter.Entities.UsersData;
using Wchter.Models.UsersData;
using Wchter.Services.UsersData;

namespace Wchter.Controllers.UsersData
{
    [Authorize]
    [ApiController]
    [Route("UsersData/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly AppSettings _appSettings;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IOptions<AppSettings> appSettings, IMapper mapper)
        {
            _userService = userService;
            _appSettings = appSettings.Value;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody]LoginModel loginModel)
        {
            var user = _userService.Login(loginModel.Username.ToLower(), loginModel.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect"});
            
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Token);
            //Consultar el tipo Rol de usuario
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserId),
                new Claim(ClaimTypes.Name, user.Username)
                //new Claim(ClaimTypes.Rol, RUserUserType.UserTypeId)
            };

            var userIdentity = new ClaimsIdentity(claims,"User");
            var userPrincipal = new ClaimsPrincipal(userIdentity);

            HttpContext.SignInAsync(userPrincipal);

            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = userIdentity,
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = signingCredentials
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(
                new
                {
                    ID = user.UserId,
                    Username = user.Username,
                    FirstName = user.FirstName,
                    FirstSurname = user.FirstSurname,
                    Token = tokenString
                }
            );
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = _userService.GetUsers();
            var userModels = _mapper.Map<IList<UserModel>>(users);
            return Ok(userModels);
        }

        [HttpGet("{userId}")]
        public IActionResult GetUser(string userId)
        {
            var user = _userService.GetUser(userId);
            var userModel = _mapper.Map<UserModel>(user);
            return Ok(userModel);
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody]RegisterModel registerModel)
        {
            // map registerModel to entity
            var user = _mapper.Map<User>(registerModel);

            try
            {
                // register user
                _userService.Register(user);
                return Ok(
                    new
                    {
                        ID = user.UserId,
                        Username = user.Username,
                        FirstName = user.FirstName,
                        FirstSurname = user.FirstSurname,
                    }
                );
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPut("activate/{userId}")]
        public IActionResult Activate(string userId, [FromBody]ActivateModel activateModel)
        {
           var user = _mapper.Map<User>(activateModel);
           user.UserId = userId;
           try
            {
                var userActivated = _userService.Activate(user, activateModel.Password);
                return Ok( new 
                {
                    FirstName = userActivated.FirstName, 
                    FirstSurname = userActivated.FirstSurname
                });
            }
            catch (AppException ex)
            {
                
                return BadRequest(new {message = ex.Message});
            }
        }

        [HttpPut("update/{userId}")]
        public IActionResult Update(string userId, [FromBody]UpdateModel updateModel)
        {
            var user = _mapper.Map<User>(updateModel);
            user.UserId = userId;

            try
            {
                _userService.Update(user, updateModel.OldPassword, updateModel.NewPassword);
                return Ok();
            }
            catch (AppException ex)
            {
                
                return BadRequest(new {message = ex.Message});
            }
        }

        [HttpDelete("{userId}")]
        public IActionResult Delete(string userId)
        {
            try
            {
                _userService.Delete(userId);
                return Ok();
            }
            catch (AppException ex)
            {
                
                return BadRequest(new {message = ex.Message});
            }
        }
    }
}