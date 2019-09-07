using FluentValidation;
using Gol_Domain.Entities;
using Gol_Domain.Interfaces;
using Infra.Data.Repository;
using System;
using System.Collections.Generic;

namespace Gol_Service.Services
{
    public class BaseService<T> : IService<T> where T : BaseEntity
    {
        private BaseRepository<T> repository = new BaseRepository<T>();

        public T Post<V>(T obj) where V : AbstractValidator<T>
        {
            Validate(obj, Activator.CreateInstance<V>());

            repository.Insert(obj);
            return obj;
        }

        public T Put<V>(T obj) where V : AbstractValidator<T>
        {
            Validate(obj, Activator.CreateInstance<V>());

            repository.Update(obj);
            return obj;
        }

        public void Delete(int id)
        {
            if (id.Equals(0))
                throw new ArgumentException($"Please choose the {typeof(T).Name} to delete.");

            repository.Remove(id);
        }


        public IList<T> Get() => repository.SelectAll();

        public T Get(int id)
        {
            if (id.Equals(0))
                throw new ArgumentException($"Please tell me the {typeof(T).Name} you want.");

            return repository.Select(id);
        }

        private void Validate(T obj, AbstractValidator<T> validator)
        {
            if (obj == null)
                throw new Exception($"{typeof(T).Name} can't be null.");

            validator.ValidateAndThrow(obj);
        }

    }
}
