/*
 * wmb.h
 *
 *  Created on: Jan 18, 2013
 *      Author: nstiurca
 */
#pragma once
#ifndef BIKE_FEATURES_H_
#define BIKE_FEATURES_H_

#include <string>

#include <opencv2/core/core.hpp>

namespace wmb
{

  struct BikeFeatures
  {
    std::string id;
    cv::Mat_<double> features;

    void read(const cv::FileNode &n);
    void write(cv::FileStorage &fs) const;
  };

  void read(const cv::FileNode &, BikeFeatures &, const BikeFeatures &default_value = BikeFeatures());
  void write(cv::FileStorage& fs, const std::string&, const BikeFeatures& bf);

}

#endif /* WMB_H_ */
