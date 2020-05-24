using AutoMapper;
using Wchter.Entities.UsersData;
using Wchter.Entities.WchterData;

using Wchter.Models.UsersData;

namespace Wchter.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ActivateModel, User>(); //Post
            CreateMap<LoginModel, User>(); //Post
            CreateMap<RegisterModel, User>(); //Post
            CreateMap<UpdateModel, User>(); //Put
            CreateMap<User, UserModel>(); //Get
        }
    }
}