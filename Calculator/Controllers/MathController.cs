using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Calculator.Controllers
{
    //HTTP GET methods for basic mathematical operations.
    public class MathController : ApiController
    {
        [HttpGet]
        public float Add(float value1, float value2)
        {
            return value1 + value2;
        }

        [HttpGet]
        public float Subtract(float value1, float value2)
        {
            return value1 - value2;
        }

        [HttpGet]
        public float Multiply(float value1, float value2)
        {
            return value1 * value2;
        }

        [HttpGet]
        public float Divide(float value1, float value2)
        {
            return value1 / value2;
        }

        [HttpGet]
        public string Get()
        {
            return "default";
        }
    }
}
