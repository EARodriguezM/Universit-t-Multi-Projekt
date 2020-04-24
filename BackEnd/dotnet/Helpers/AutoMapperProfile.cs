using w_chter.Dtos;
using w_chter.Models.Wchter_Login;
using AutoMapper;

namespace w_chter.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<LoginDto, UserLogin>();
        }
    }
}