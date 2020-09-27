#!/bin/bash

bundle exec bin/rails db:migrate
bundle exec puma -C config/puma.rb
